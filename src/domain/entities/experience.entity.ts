export class Experience {
    constructor(
        public readonly company: string,
        public readonly role: string,
        public readonly duration: string,
        public readonly description: string,
        public readonly skills: string[]
    ) {}
}