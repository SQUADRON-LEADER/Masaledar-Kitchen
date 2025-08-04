import { useState } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Masaledar Kitchen! 🍛 How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    "Book a table",
    "View menu",
    "Opening hours",
    "Location",
    "Special offers"
  ];

  const botResponses: { [key: string]: string } = {
    "book a table": "I'd be happy to help you make a reservation! You can book directly through our website or call us at (555) 123-4567. What date and time works for you?",
    "view menu": "You can view our full menu on the website! We specialize in authentic Indian cuisine with family recipes passed down through generations. 🥘",
    "opening hours": "We're open Monday-Thursday 5:00 PM - 10:00 PM, Friday-Saturday 5:00 PM - 11:00 PM, and Sunday 4:00 PM - 9:00 PM.",
    "location": "We're located at 123 Gourmet Street, Culinary District, Food City. You can find us easily using Google Maps!",
    "special offers": "Check out our special family combo deals and weekend buffet! We also have a 15% discount for first-time customers. 🎉"
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot response logic
    const lowerInput = inputMessage.toLowerCase();
    let botResponse = "Thanks for your message! For immediate assistance, please call us at (555) 123-4567 or use our reservation system.";
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerInput.includes(key)) {
        botResponse = response;
        break;
      }
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    sendMessage();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group animate-pulse hover:animate-none"
          aria-label="Open live chat"
        >
          <MessageSquare className="w-6 h-6 group-hover:animate-bounce" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Masaledar Kitchen</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isBot ? 'bg-orange-100 mr-2' : 'bg-blue-100 ml-2'}`}>
                    {message.isBot ? <Bot className="w-4 h-4 text-orange-600" /> : <User className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className={`p-3 rounded-2xl ${message.isBot ? 'bg-gray-100 text-gray-800' : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'}`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-600 px-3 py-1 rounded-full transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
              />
              <button
                onClick={sendMessage}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
