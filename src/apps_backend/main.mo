import Time "mo:base/Time";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import Array "mo:base/Array";

actor {
  type File = {
    name : Text;
    content : Blob;
    fileType : Text;
    size : Nat;
    uploadedAt : Int;
  };

  var files : [File] = [];

  public func uploadFile(name : Text, fileType : Text, size : Nat, content : Blob) : async Text {
    let file : File = {
      name = name;
      content = content;
      fileType = fileType;
      size = size;
      uploadedAt = Time.now();
    };

    files := Array.append<File>(files, [file]);
    return "Uploaded: " # name;
  };

  public query func getFiles() : async [File] {
    return files;
  };
};
