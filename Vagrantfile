Vagrant.configure("2") do |config|
  config.vm.define "db" do |node|
    node.vm.box = "ubuntu/xenial64"
    node.vm.provision "file", source: "databases/Dockerfile", destination: "Dockerfile"
    node.vm.provision "file", source: "databases/setup.sh", destination: "setup.sh"
    node.vm.provision "docker" do |docker|
      docker.build_image ".",
        args: "-t postgres-db"
      docker.run "postgres-db",
        args: "-p 5432:5432 \
               -e POSTGRES_PASSWORD=root \
               -e POSTGRES_USER=root"
    end
    node.vm.network "forwarded_port", guest: 5432, host: 5432
    node.vm.network :private_network, :ip => "192.168.0.10"
  end
end