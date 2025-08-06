import { Button } from "@/components/ui/button";
import { Shield, LogOut, User, Upload, Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Navigate to login page
    navigate("/login");
  };

  const isPublicProfile = location.pathname.startsWith("/public/");

  return (
    <header className="border-b bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Shield className="h-7 w-7 text-primary" />
          <h1 
            className="text-2xl font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={() => navigate("/")}
          >
            Proofolio
          </h1>
        </div>

        {/* Navigation Menu */}
        {!isPublicProfile && (
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className={`px-4 py-2 rounded-xl font-medium ${
                location.pathname === "/dashboard" 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              <Home className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/profile")}
              className={`px-4 py-2 rounded-xl font-medium ${
                location.pathname === "/profile" 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              My Resume
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/upload")}
              className={`px-4 py-2 rounded-xl font-medium ${
                location.pathname === "/upload" 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
          </nav>
        )}

        {/* Logout Button */}
        {!isPublicProfile && (
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl px-4 py-2"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;