import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.ses.SesClient
import software.amazon.awssdk.services.ses.model.*

class EmailService {

    private val sesClient = SesClient.builder()
        .region(Region.US_EAST_1)
        .build()

    fun sendEmail(userName: String, userEmail: String, userMessage: String) {
        val emailBody = """
        New message from website:

        Name: $userName
        Email: $userEmail
        Message:
        $userMessage
        """.trimIndent()

        val request = SendEmailRequest.builder()
            .destination(Destination.builder().toAddresses("noel.pena@hotmail.com").build())
            .message(
                Message.builder()
                    .subject(Content.builder().data("New message from $userName").charset("UTF-8").build())
                    .body(Body.builder()
                        .text(Content.builder().data(emailBody).charset("UTF-8").build())
                        .build())
                    .build()
            )
            .source("no-reply@noel-pena.com")
            .build()

        sesClient.sendEmail(request)
        println("Email sent successfully!")
    }
}