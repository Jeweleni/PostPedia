interface UserProfile {
    id: string;
    userType: 'WRITER' | 'READER';
    createdAt: Date;
    updatedAt: Date;
    image: string;
    emails: {
        value: string;
        verified: boolean;
    }[]
    displayName: string;
    photos: {
        value: string;
    }[]
}

export type { UserProfile }