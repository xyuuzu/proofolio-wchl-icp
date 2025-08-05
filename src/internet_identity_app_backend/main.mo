import Principal "mo:base/Principal";

actor class internet_identity_app() = this {
  public query func greet(user : Principal) : async Text {
    "Hello from backend! Your principal is " # Principal.toText(user)
  };
};