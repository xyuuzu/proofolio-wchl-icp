import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Plus, FileText, Share2, Edit3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import ManualInputModal from "@/components/ManualInputModal";
import Navbar from "@/components/Navbar";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const verifiedSkills = [
    "Motoko",
    "Rust",
    "Smart Contracts",
    "Internet Computer",
    "Blockchain Development"
  ];

  const personalClaims = [
    "Ketua Himpunan Mahasiswa"
  ];

  const handleShare = () => {
    navigator.clipboard.writeText("https://verifolio.app/dina");
    toast({
      title: "Link berhasil disalin",
      description: "Link profile sudah ada di clipboard Anda",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Actions */}
      <div className="border-b bg-card/50">
        <div className="max-w-4xl mx-auto px-6 py-3 flex justify-end">
          <Button
            onClick={handleShare}
            variant="outline"
            size="sm"
            className="rounded-xl"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Bagikan Profile
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="text-center space-y-4 mb-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-primary">D</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Dina</h2>
            <p className="text-muted-foreground">Blockchain Developer</p>
          </div>
          
          {/* Progress */}
          <Card className="max-w-md mx-auto border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Progress Resume</span>
                <span className="text-sm text-muted-foreground">60% Complete</span>
              </div>
              <Progress value={60} className="h-2" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6">
          {/* Verified Skills */}
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-verified" />
                <span>Skills Terverifikasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {verifiedSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-verified-light text-verified border-verified/20 hover:bg-verified-light/80 rounded-xl px-3 py-1"
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certificates */}
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>Sertifikasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-verified-light rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-verified/10 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-verified" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Certified ICP Developer</h4>
                    <p className="text-sm text-muted-foreground">Verified on blockchain</p>
                  </div>
                </div>
                <Badge className="bg-verified text-verified-foreground">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Personal Claims */}
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-4 flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Edit3 className="h-5 w-5 text-claim" />
                <span>Pengalaman</span>
              </CardTitle>
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                size="sm"
                className="rounded-xl"
              >
                <Plus className="h-4 w-4 mr-2" />
                Tambah
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {personalClaims.map((claim) => (
                  <div key={claim} className="flex items-center justify-between p-4 bg-claim-light rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-claim/10 rounded-xl flex items-center justify-center">
                        <Edit3 className="h-6 w-6 text-claim" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{claim}</h4>
                        <p className="text-sm text-muted-foreground">2022 - 2023</p>
                      </div>
                    </div>
                    <Badge className="bg-claim text-claim-foreground">
                      <Edit3 className="h-3 w-3 mr-1" />
                      Klaim Pribadi
                    </Badge>
                  </div>
                ))}
                
                {personalClaims.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>Belum ada pengalaman yang ditambahkan</p>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      variant="ghost"
                      className="mt-2"
                    >
                      Tambahkan pengalaman pertama
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Action Button */}
          <div className="text-center">
            <Button
              onClick={() => navigate("/public/dina")}
              size="lg"
              className="h-12 px-8 rounded-2xl"
            >
              <Share2 className="h-5 w-5 mr-2" />
              Lihat Profile Publik
            </Button>
          </div>
        </div>
      </main>

      <ManualInputModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Profile;