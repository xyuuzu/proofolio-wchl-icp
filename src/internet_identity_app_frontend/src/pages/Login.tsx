import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fingerprint, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login and navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <img src="/logo-proofolio.svg" alt="Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-foreground">Proofolio</h1>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground">
            Masuk ke Proofolio
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Verifikasi resume Anda dengan teknologi blockchain
          </p>
        </div>

        {/* Login Card */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 space-y-6">
            {/* Biometric Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Fingerprint className="h-12 w-12 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-verified rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-verified-foreground" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={handleLogin}
              className="w-full h-12 text-lg font-medium rounded-2xl"
              size="lg"
            >
              Login with Internet Identity
            </Button>

            {/* Subtext */}
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Aman, tanpa email & password.
              </p>
              <p className="text-sm text-muted-foreground">
                Otentikasi cepat via biometrik.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Powered by Internet Computer Protocol
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;