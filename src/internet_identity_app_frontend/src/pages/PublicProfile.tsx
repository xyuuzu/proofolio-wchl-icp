import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Edit3, ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const PublicProfile = () => {
  const { toast } = useToast();

  const verifiedSkills = [
    "Motoko",
    "Rust", 
    "Smart Contracts",
    "Internet Computer",
    "Blockchain Development"
  ];

  const personalClaims = [
    {
      position: "Ketua Himpunan Mahasiswa",
      organization: "Universitas Indonesia", 
      period: "2022 - 2023"
    }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://verifolio.app/dina");
    toast({
      title: "Link berhasil disalin",
      description: "Link profile sudah ada di clipboard Anda",
    });
  };

  const handleShareLinkedIn = () => {
    const text = "Lihat resume terverifikasi blockchain saya di Verifolio";
    const url = "https://verifolio.app/dina";
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Share Actions */}
      <div className="border-b bg-card/50">
        <div className="max-w-4xl mx-auto px-6 py-3 flex justify-end space-x-2">
          <Button
            onClick={handleCopyLink}
            variant="outline"
            size="sm"
            className="rounded-xl"
          >
            <Copy className="h-4 w-4 mr-2" />
            Salin Link
          </Button>
          <Button
            onClick={handleShareLinkedIn}
            size="sm"
            className="rounded-xl"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Bagikan ke LinkedIn
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl font-bold text-primary">D</span>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">Dina</h2>
            <p className="text-xl text-muted-foreground">Blockchain Developer</p>
            <p className="text-muted-foreground mt-2">
              Resume terverifikasi menggunakan teknologi blockchain
            </p>
          </div>
          
          {/* Verification Badge */}
          <div className="flex justify-center">
            <Badge className="bg-verified text-verified-foreground px-4 py-2 text-sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Terverifikasi oleh Verifolio
            </Badge>
          </div>
        </div>

        <div className="grid gap-8">
          {/* About Section */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">Tentang</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Blockchain developer yang berpengalaman dalam mengembangkan smart contracts 
                dan aplikasi terdesentralisasi menggunakan Internet Computer Protocol. 
                Memiliki keahlian dalam Motoko dan Rust untuk pengembangan canister.
              </p>
            </CardContent>
          </Card>

          {/* Verified Skills */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-verified" />
                <span>Skills Terverifikasi</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Skills yang telah diverifikasi melalui sertifikat blockchain
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {verifiedSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-verified-light text-verified border-verified/20 hover:bg-verified-light/80 rounded-xl px-4 py-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certificates */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <FileText className="h-6 w-6 text-primary" />
                <span>Sertifikasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-6 bg-verified-light rounded-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-verified/10 rounded-xl flex items-center justify-center">
                    <FileText className="h-8 w-8 text-verified" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Certified ICP Developer</h4>
                    <p className="text-muted-foreground">Internet Computer Protocol</p>
                    <p className="text-sm text-muted-foreground">Verified on blockchain</p>
                  </div>
                </div>
                <Badge className="bg-verified text-verified-foreground px-3 py-1">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Verified
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Edit3 className="h-6 w-6 text-claim" />
                <span>Pengalaman</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {personalClaims.map((experience, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-claim-light rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-claim/10 rounded-xl flex items-center justify-center">
                        <Edit3 className="h-8 w-8 text-claim" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{experience.position}</h4>
                        <p className="text-muted-foreground">{experience.organization}</p>
                        <p className="text-sm text-muted-foreground">{experience.period}</p>
                      </div>
                    </div>
                    <Badge className="bg-claim text-claim-foreground px-3 py-1">
                      <Edit3 className="h-4 w-4 mr-1" />
                      Klaim Pribadi
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8">
            <div className="bg-primary/5 rounded-2xl p-6 inline-block">
              <p className="text-sm text-primary/80 mb-4">
                🔗 Resume ini diverifikasi menggunakan teknologi blockchain
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Button
                  onClick={handleCopyLink}
                  variant="outline"
                  size="sm"
                  className="rounded-xl"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Salin Link
                </Button>
                <Button
                  onClick={handleShareLinkedIn}
                  size="sm"
                  className="rounded-xl"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Bagikan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PublicProfile;