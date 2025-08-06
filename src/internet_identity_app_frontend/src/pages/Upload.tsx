import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload as UploadIcon, FileText, Sparkles, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const Upload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file.type === "application/pdf") {
      setSelectedFile(file);
      toast({
        title: "File berhasil dipilih",
        description: `${file.name} siap untuk diproses`,
      });
    } else {
      toast({
        title: "Format file tidak didukung",
        description: "Silakan pilih file PDF",
        variant: "destructive",
      });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleProcess = () => {
    if (selectedFile) {
      navigate("/processing");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <div className="border-b bg-card/50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/dashboard")}
            className="rounded-xl"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali
          </Button>
          <h1 className="text-xl font-bold text-foreground">Upload Certificate</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-foreground">
              Upload Your Certificate
            </CardTitle>
            <p className="text-muted-foreground">
              Example: "Certified React Developer" or "AWS Solutions Architect"
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Drag & Drop Area */}
            <div
              className={`relative border-2 border-dashed rounded-2xl p-12 transition-all duration-200 ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : "border-border bg-muted/30 hover:bg-muted/50"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <UploadIcon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">
                    {selectedFile ? selectedFile.name : "Seret & lepas file PDF di sini"}
                  </h3>
                  <p className="text-muted-foreground">
                    atau klik tombol di bawah untuk memilih file
                  </p>
                </div>

                {selectedFile && (
                  <div className="flex items-center justify-center space-x-2 text-verified">
                    <FileText className="h-5 w-5" />
                    <span className="font-medium">File siap diproses</span>
                  </div>
                )}
              </div>
            </div>

            {/* Upload Button */}
            <Button
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              className="w-full h-12 rounded-2xl"
            >
              <UploadIcon className="h-5 w-5 mr-2" />
              Unggah PDF Sertifikat
            </Button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileInput}
              className="hidden"
            />

            {/* Process Button */}
            <Button
              onClick={handleProcess}
              disabled={!selectedFile}
              className="w-full h-12 rounded-2xl text-lg font-medium"
              size="lg"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Proses & Verifikasi
            </Button>

            {/* Tooltip */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
              <p className="text-sm text-primary/80 text-center">
                💡 AI akan membaca dan memverifikasi skill Anda secara otomatis
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Upload;