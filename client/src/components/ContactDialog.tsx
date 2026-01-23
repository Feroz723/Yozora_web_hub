import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/20">
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-primary/20 bg-card/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-center">Get in Touch</DialogTitle>
          <DialogDescription className="text-center">
            Ready to start your project? Connect with Yozora Technologies.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-6">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Email Us</p>
              <a href="mailto:admin@yozoratech.com" className="text-lg font-semibold hover:text-primary transition-colors">
                admin@yozoratech.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Call Us</p>
              <a href="tel:+918688823142" className="text-lg font-semibold hover:text-secondary transition-colors">
                +91 86888 23142
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
               <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
               <p className="text-sm text-muted-foreground font-medium">Location</p>
               <p className="text-base font-semibold">Hyderabad, India</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            We typically respond within 24 hours.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}