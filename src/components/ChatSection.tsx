// This component provides a chat interface for users to interact with the AI.

import { useState, useRef, useEffect } from "react";
import { Bot, UserRound, ArrowUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const ChatSection = ({ onSendMessage, transcript }) => {
  // State to manage chat messages, user input, and loading state.
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Ref to scroll to the bottom of the chat automatically.
  const messagesEndRef = useRef(null);

  // Function to scroll to the bottom of the chat.
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the bottom whenever messages change.
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to handle sending a message.
  const handleSend = async () => {
    if (!input.trim()) return;  // Prevent sending empty messages.

    // Add the user's message to the chat.
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");  // Clear the input field.
    setIsLoading(true);  // Show the loading indicator.

    try {
      // Send the message to the backend and get the AI's response.
      const response = await onSendMessage(input, transcript);
      const assistantMessage = {
        role: "assistant",
        content: response.answer || response  // Use the AI's answer.
      };
      setMessages((prev) => [...prev, assistantMessage]);  // Add the AI's response to the chat.
    } catch (error) {
      console.error("Failed to send message", error);  // Log any errors.
    } finally {
      setIsLoading(false);  // Hide the loading indicator.
    }
  };

  return (
    <div className="container px-4 md:px-6 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Discuss the Video</CardTitle>
          <p className="text-muted-foreground">Ask questions about the video content</p>
        </CardHeader>
        <Separator />
        <CardContent className="p-0">
          <div className="h-[450px] overflow-y-auto p-4">
            <div className="space-y-4">
              {/* Render chat messages */}
              {messages.map((message, i) => (
                <div 
                  key={i} 
                  className={`flex gap-3 ${message.role === 'assistant' ? '' : 'justify-end'}`}
                >
                  {/* Render the assistant's avatar */}
                  {message.role === 'assistant' && (
                    <Avatar className="h-8 w-8 bg-primary/20">
                      <AvatarFallback className="text-primary">
                        <Bot size={16} />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  {/* Render the message bubble */}
                  <div 
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === 'assistant'
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                  </div>
                  {/* Render the user's avatar */}
                  {message.role === 'user' && (
                    <Avatar className="h-8 w-8 bg-muted">
                      <AvatarFallback>
                        <UserRound size={16} />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {/* Show a loading indicator when the AI is processing */}
              {isLoading && (
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 bg-primary/20">
                    <AvatarFallback className="text-primary">
                      <Bot size={16} />
                    </AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg px-4 py-2 bg-secondary text-secondary-foreground">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 border-t">
          <div className="flex w-full items-center gap-2">
            {/* Input field for the user to type their message */}
            <Textarea 
              placeholder="Ask a question about the video..."
              className="min-h-12 flex-1 resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              disabled={isLoading}  // Disable input while loading.
            />
            {/* Send button */}
            <Button 
              size="icon" 
              className="h-12 w-12 rounded-full"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}  // Disable button if input is empty or loading.
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatSection;