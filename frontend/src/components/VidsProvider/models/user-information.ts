interface Constructor {
  id: string;
  phone: string;
}

class UserInformation {
  id: string;
  phone: string;
  
  constructor (args: Constructor) {
    this.id = args.id;
    this.phone = args.phone;
  }

  static fromResponse (response: Record<string, any>) {
    return new UserInformation({
      id: response.id,
      phone: response.phone
    })
  }
}

export default UserInformation;