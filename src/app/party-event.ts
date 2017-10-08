export interface PartyEvent {
    createdAt: Date;
    endsAt: Date;
    id: number;
    location: number;
    originallyStartsAt: Date;
    party: string;
    public: boolean;
    startsAfter: number;
    startsAt: Date;
    streamUrl: string;
    url: string;
    // tags: string | array?
}
