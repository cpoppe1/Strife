@servers.each do |server|
    json.set! server.id do
        json.general_channel_id server.channels.first.id
        json.partial! "api/servers/server", server: server
    end
end


# @servers.each do |server|
#     server.channels.each do |channel|
#         json.set! channel.id do
#             json.extract! channel :id, :channel_name, :server_id
#         end
#     end
# end



@servers.each do |server|
    json.set! server.id do
        server_channels = server.channels
        server_channels.each do |channel|
            json.channels do
            json.set! channel.id do
                json.channel_Memberships do
                channelMemberships = channel.channel_members
                channelMemberships.each do |channelmember|
                    json.set! channelmember.id do                   
                        json.extract! channelmember, :id, :channel_id, :receiver_id
        
                    end
                end
            end
                json.extract! channel, :id, :server_id, :channel_name
            end
        end
        end

    end
end



