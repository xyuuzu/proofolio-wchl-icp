import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, FileText, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Verifolio</h1>
          </div>
          <Button
            onClick={() => navigate("/login")}
            className="rounded-2xl"
          >
            Masuk
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              Resume Terverifikasi<br />
              <span className="text-primary">dengan Blockchain</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bangun kepercayaan dengan resume yang diverifikasi secara otomatis 
              menggunakan teknologi blockchain dan AI.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              className="h-14 px-8 text-lg font-medium rounded-2xl"
            >
              Mulai Gratis
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              onClick={() => navigate("/public/dina")}
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg font-medium rounded-2xl"
            >
              Lihat Demo
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-md text-center">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 bg-verified/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-verified" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Verifikasi Otomatis</h3>
              <p className="text-muted-foreground">
                AI membaca sertifikat Anda dan memverifikasi skill secara otomatis di blockchain
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md text-center">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Aman & Terpercaya</h3>
              <p className="text-muted-foreground">
                Data tersimpan di blockchain yang tidak dapat dimanipulasi dan transparan
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md text-center">
            <CardContent className="p-8 space-y-4">
              <div className="w-16 h-16 bg-claim/10 rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-8 w-8 text-claim" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Mudah Dibagikan</h3>
              <p className="text-muted-foreground">
                Resume Anda dapat diakses publik dengan link yang mudah dibagikan
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Siap Membangun Kepercayaan?
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Bergabunglah dengan ribuan profesional yang telah memverifikasi resume mereka
          </p>
          <Button
            onClick={() => navigate("/login")}
            size="lg"
            className="h-14 px-8 text-lg font-medium rounded-2xl"
          >
            Mulai Sekarang
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Verifolio. Powered by Internet Computer Protocol.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
