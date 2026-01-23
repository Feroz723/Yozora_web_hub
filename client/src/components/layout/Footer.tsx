import ContactDialog from "@/components/ContactDialog";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-8">
        
        {/* Contact Trigger */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold">Ready to Launch?</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Let's discuss how we can bring your ideas to life with our expert web development services.
          </p>
          <ContactDialog />
        </div>

        <div className="w-full h-px bg-border/50 max-w-sm mx-auto my-4" />

        {/* Copyright */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-border">
               <img src="/logo.jpeg" alt="Yozora" className="w-full h-full object-cover" />
            </div>
            <span className="font-heading font-bold text-foreground">Yozora Technologies</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Copyright © 2026 Yozora Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}