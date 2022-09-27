module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user, :dmServers, :serverChannelsStreaming
    def current_user
      @current_user ||= User.find_by(session_token: request.session[:session_token])
    end

    def dmServers
      @dmServers ||= []
    end

    def serverChannelsStreaming
      @serverChannelsStreaming ||= []
    end

    private

    # def find_DmServer
    #   ActionCable.server.connections.select { |con| con.current_DmServer == DmChannel }
    # end
    # def find_Connected_Channel
    #   ActionCable.server.connections.select { |con| con.curren == DmChannel }
    # end

  end
end
