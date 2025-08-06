import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleUploadCertificate = () => {
    navigate("/upload");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Welcome Message */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome back, Dina! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Build your verified resume with blockchain-backed credentials
          </p>
        </div>

        {/* Empty State CTA Card */}
        <div className="flex justify-center">
          <Card className="max-w-2xl w-full shadow-lg border-0 rounded-2xl">
            <CardHeader className="text-center pb-8 pt-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <FileText className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Start building your verified resume
              </CardTitle>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Upload your certificates and let our AI verify your skills automatically. 
                Create a trusted profile that employers can rely on.
              </p>
            </CardHeader>
            
            <CardContent className="text-center pb-12">
              <Button 
                onClick={handleUploadCertificate}
                size="lg"
                className="h-14 px-12 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Upload className="h-5 w-5 mr-3" />
                Upload Certificate
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                Supported formats: PDF • Automatic verification with AI
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview (Optional) */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Blockchain Verified</h3>
            <p className="text-sm text-muted-foreground">Your credentials are secured on-chain</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">AI-Powered Analysis</h3>
            <p className="text-sm text-muted-foreground">Automatic skill extraction and verification</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Easy Sharing</h3>
            <p className="text-sm text-muted-foreground">Share your verified profile with employers</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;