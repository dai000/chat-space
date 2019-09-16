json.id @message.id
json.content   @message.content
json.date   @message.created_at.to_s(:ja)
json.image  @message.image
json.user_name  @message.user.name
