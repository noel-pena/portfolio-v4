val kotlin_version: String by project
val logback_version: String by project

plugins {
    kotlin("jvm") version "2.1.10"
    kotlin("plugin.serialization") version "2.1.10"
    id("io.ktor.plugin") version "3.2.3"
}

group = "noelpena"
version = "0.0.1"

application {
    mainClass = "io.ktor.server.netty.EngineMain"
}

dependencies {
    implementation("io.ktor:ktor-server-core-jvm")
    implementation("io.ktor:ktor-server-netty")
    implementation("com.amazonaws:aws-lambda-java-core")
    implementation("io.ktor:ktor-server-cors-jvm")
    implementation("software.amazon.awssdk:ses:2.33.0")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.8.1")
}
