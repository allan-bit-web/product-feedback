import { useState } from "react";
import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner"

export default function App(){
    const [feedbacks,setFeedbacks] = useState([]);

    const addFeedback = (feedback) => {
        setFeedbacks(prev => [feedback, ...prev]);
    };

    const deleteFeedback = (index) => {
        setFeedbacks(prev => prev.filter((_,i) => i !== index));
        toast.success("Feedback Deleted Successfully");
    };

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            <h1 className="text-3xl font-bold">Customer feedback preview</h1>
            <FeedbackForm onAdd={addFeedback} />
            <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback} />
            <Toaster />
        </div>
    )
}