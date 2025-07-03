import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeedbackItem({feedback,index,onDelete}){
    return(
        <Card className="p-4 flex justify-between items-start">
            <div>
                <h2 className="font-semibold">
                    {feedback.name}
                </h2>
                <p className="text-sm text-gray-600">
                    {feedback.comment}
                </p>
                <p className="text-sm font-medium mt-1">Rating:{feedback.rating}</p>
            </div>
            <Button variant="destructive" onclick={() => onDelete(index)}>Delete</Button>
        </Card>

    )
}