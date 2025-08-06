import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sparkles, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Processing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate processing time and redirect to profile
    const timer = setTimeout(() => {
      navigate("/profile");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardContent className="p-8 space-y-8">
          {/* Processing Animation */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="h-10 w-10 text-primary animate-spin" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-verified rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-verified-foreground" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-foreground">
                Memproses Dokumen Anda
              </h2>
              <p className="text-muted-foreground">
                AI sedang membaca dan memverifikasi skill Anda secara on-chain...
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-3">
            <Progress value={75} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Menganalisis konten...</span>
              <span>75%</span>
            </div>
          </div>

          {/* Status Steps */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm">
              <CheckCircle className="h-4 w-4 text-verified" />
              <span className="text-foreground">PDF berhasil dibaca</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <CheckCircle className="h-4 w-4 text-verified" />
              <span className="text-foreground">Ekstraksi informasi selesai</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-foreground">Verifikasi blockchain...</span>
            </div>
          </div>

          {/* Blockchain Animation */}
          <div className="bg-primary/5 rounded-2xl p-4 text-center">
            <p className="text-sm text-primary/80">
              🔗 Menyimpan verifikasi ke Internet Computer...
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Processing;