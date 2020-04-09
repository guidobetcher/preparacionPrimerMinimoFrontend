
export interface Student {
  name: string;
  address: string;
  phones: [{
    key: string,
    value: string
  }];
  studies: [
    {
      name: string
    }
  ];
}
