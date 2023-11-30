{
  description = "Node.js development environment.";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        nodejs = pkgs.nodejs-18_x;
      in
      {
        devShell =
          pkgs.mkShell {
            buildInputs = with pkgs; [
              nodejs
              (yarn.override { inherit nodejs; })
            ];
          };
      });
}
