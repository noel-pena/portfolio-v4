package com.noelpena

import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.ses.SesClient
import software.amazon.awssdk.services.ses.model.*

class EmailService {
    private val sesClient = SesClient.builder()
        .region(Region.US_EAST_1)
        .build()

    fun sendEmail(name: String, email: String, message: String) {
        val emailBody = """
        New message from website:

        Name: $name
        Email: $email
        Message:
        $message
        """.trimIndent()

        val request = SendEmailRequest.builder()
            .destination(Destination.builder().toAddresses("noel.pena@hotmail.com").build())
            .message(
                Message.builder()
                    .subject(Content.builder().data("New message from $name").charset("UTF-8").build())
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