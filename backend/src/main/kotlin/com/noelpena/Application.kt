package com.noelpena

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.cors.routing.*

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    install(CORS) {
        anyHost()
//        allowHost("noel-pena.com", schemes = listOf("https"))
//        allowHost("www.noel-pena.com", schemes = listOf("https"))
        allowHeader(HttpHeaders.ContentType)
        allowMethod(HttpMethod.Post)
    }

    configureRouting()
}
