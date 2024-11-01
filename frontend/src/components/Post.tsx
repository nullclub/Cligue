import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";

function Post({
  id,
  handle,
  user,
  content,
  date,
}: {
  id: number;
  handle: string;
  user: string;
  content: string;
  date: any;
}) {
  return (
    <div key={id} className="bg-gray-800 p-4 rounded-lg shadow mb-4">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar>
          <AvatarImage src={`/placeholder-user.jpg`} alt={`@${handle}`} />
          <AvatarFallback>{user.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold text-gray-100">{user}</p>
          <p className="text-sm text-gray-400">@{handle}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-100"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
      <p className="mb-4 text-gray-100">{content}</p>
      <div className="text-sm text-gray-400">
        {new Date(date).toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
}

export default Post;
