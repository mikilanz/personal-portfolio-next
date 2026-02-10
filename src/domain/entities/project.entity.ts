export class Project {
  constructor(
    public readonly title: string,
    public readonly tech: string[],
    public readonly description: string,
    public readonly url: string
  ) {}
}
