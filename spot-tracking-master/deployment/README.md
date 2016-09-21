# Spot Tracking deployment

Or more specifically image creation

Currently the virtualbox build is most useful for development, docker is tempermental, and AWS should be added for production deploys

Once github is done with the DOS attack, we can make github the default repo again

A variables.json file can also be configured so that you do not need vars on the command line

Copy the provided variables.json.template to variables.json and enter the values there

DO NOT CHECK SECRETS INTO VERSION CONTROL

And don't check in ovf files because we don't need to be passing several hundred mb through git


## Usage

To build run:

```bash
$packer build -var "gitkey=path to key" \
              -var "gitkeypub=public key" \
              -var "awsaccess=aws access id token" \
              -var "awssecret=aws secret token" \
              -var "ovfpath=path to base ovf image" \
              -only=virtualbox-ovf spot.json
```

OR

```bash
$packer build -var-files=variables.json -only=virtualbox-ovf spot.json
```

you have to provide real variables that point to the ssh keys, aws tokes, and the base ovf file

## Todos

- [ ] Add aws builder
- [ ] Add terraform script
- [ ] fix or remove docker

