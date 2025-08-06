import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit3, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ManualInputModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ManualInputModal = ({ isOpen, onClose }: ManualInputModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    position: "",
    organization: "",
    startYear: "",
    endYear: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.position || !formData.organization) {
      toast({
        title: "Form tidak lengkap",
        description: "Silakan isi posisi dan organisasi",
        variant: "destructive",
      });
      return;
    }

    // Simulate saving
    toast({
      title: "Pengalaman berhasil ditambahkan",
      description: `${formData.position} di ${formData.organization} telah disimpan`,
    });

    // Reset form and close
    setFormData({
      position: "",
      organization: "",
      startYear: "",
      endYear: "",
      description: ""
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-2xl">
        <DialogHeader className="space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-claim/10 rounded-full flex items-center justify-center">
              <Edit3 className="h-8 w-8 text-claim" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl font-bold">
            Tambahkan Pengalaman Manual
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm">
            Akan ditandai sebagai klaim pribadi
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="position">Posisi *</Label>
            <Input
              id="position"
              placeholder="Ketua Himpunan Mahasiswa"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organisasi *</Label>
            <Input
              id="organization"
              placeholder="Universitas Indonesia"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startYear">Tahun Mulai</Label>
              <Input
                id="startYear"
                placeholder="2022"
                value={formData.startYear}
                onChange={(e) => setFormData({ ...formData, startYear: e.target.value })}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endYear">Tahun Selesai</Label>
              <Input
                id="endYear"
                placeholder="2023"
                value={formData.endYear}
                onChange={(e) => setFormData({ ...formData, endYear: e.target.value })}
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi (Opsional)</Label>
            <Textarea
              id="description"
              placeholder="Memimpin organisasi dengan 200+ anggota..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="rounded-xl resize-none"
              rows={3}
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-xl"
            >
              Batal
            </Button>
            <Button
              type="submit"
              className="flex-1 rounded-xl"
            >
              <Plus className="h-4 w-4 mr-2" />
              Tambah
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ManualInputModal;