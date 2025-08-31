package noelpena

import EmailRequest
import EmailService
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureRouting() {
    val emailService = EmailService()

    routing {
        post("/send-email") {
            val rawBody = call.receiveText()

            try {
                val request = kotlinx.serialization.json.Json.decodeFromString<EmailRequest>(rawBody)
                emailService.sendEmail(request.senderName, request.senderEmail, request.message)

                call.respondText(
                    """{"status":"success","message":"Email sent!"}""",
                    contentType = io.ktor.http.ContentType.Application.Json
                )

            } catch (e: Exception) {
                e.printStackTrace()
                call.respondText(
                    """{"status":"error","message":"Failed to send email: ${e.message}"}""",
                    contentType = io.ktor.http.ContentType.Application.Json,
                    status = io.ktor.http.HttpStatusCode.InternalServerError
                )
            }
        }
    }
}
