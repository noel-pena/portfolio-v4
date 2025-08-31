import kotlinx.serialization.Serializable

@Serializable
data class EmailRequest(
    val senderName: String,
    val senderEmail: String,
    val message: String
)