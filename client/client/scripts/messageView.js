// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {

  render: _.template(`
      <div class="chat" data-username=<%=username%>>
        <div class="username">
          <%=username%>
        </div>
        <div>
          <%=text%>
        </div>
      </div>
  `)
};