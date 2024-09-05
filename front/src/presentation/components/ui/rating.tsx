import { StarIcon } from "lucide-react";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          color={i < rating ? "yellow" : "gray"}
          fill={i < rating ? "yellow" : "gray"}
        />
      ))}
    </div>
  );
};

export default Rating;
