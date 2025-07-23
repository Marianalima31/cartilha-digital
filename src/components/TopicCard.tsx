import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon, ChevronRight } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "primary" | "accent" | "warning" | "danger";
  onClick: () => void;
  illustration?: string;
}

const colorVariants = {
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground", 
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground"
};

const TopicCard = ({ title, description, icon: Icon, color, onClick, illustration }: TopicCardProps) => {
  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer group overflow-hidden" 
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Navegar para seção: ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {illustration && (
        <div className="relative h-32 overflow-hidden">
          <img 
            src={illustration} 
            alt={`Ilustração para ${title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-lg ${colorVariants[color]} group-hover:scale-105 transition-transform`}>
            <Icon className="h-8 w-8" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base leading-relaxed">
              {description}
            </CardDescription>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
        </div>
      </CardHeader>
    </Card>
  );
};

export default TopicCard;