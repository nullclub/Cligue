import { Button } from "../components/ui/button";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center text-white px-4">
      <AlertCircle className="w-24 h-24 text-[#28a745] mb-8" />
      <h1 className="text-4xl font-bold mb-4 text-center">
        404 - Page Not Found
      </h1>
      <p className="text-xl text-gray-400 mb-8 text-center max-w-md">
        Oops! It looks like you've wandered into uncharted territory. This page
        doesn't exist in the Clique universe.
      </p>
      <Button
        onClick={() => {
          navigate("/");
        }}
        className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-2 px-4 rounded"
      >
        Return to Home
      </Button>
    </div>
  );
}
