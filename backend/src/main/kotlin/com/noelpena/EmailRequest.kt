package com.noelpena

import kotlinx.serialization.Serializable

@Serializable
data class EmailRequest(
    val name: String,
    val email: String,
    val message: String
)