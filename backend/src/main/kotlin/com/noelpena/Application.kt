package com.noelpena

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

class ContactFormLambda : RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {
    override fun handleRequest(
        input: APIGatewayProxyRequestEvent,
        context: Context
    ): APIGatewayProxyResponseEvent {
        return try {
            val emailRequest = Json.decodeFromString<EmailRequest>(input.body ?: "")
            EmailService().sendEmail(emailRequest.name, emailRequest.email, emailRequest.message)
            APIGatewayProxyResponseEvent()
                .withStatusCode(200)
                .withBody("""{"message":"Email sent successfully from Lambda handler."}""")
        } catch (e: Exception) {
            APIGatewayProxyResponseEvent()
                .withStatusCode(500)
                .withBody("""{"error":"Failed to send email from Lambda handler."}""")
        }
    }
}

@Serializable
data class EmailRequest(
    val name: String,
    val email: String,
    val message: String
)
