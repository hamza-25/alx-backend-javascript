export interface MajorCredits  {
    credit: number;
    brand?: string;
}

export interface MinorCredits {
    credit: number;
    brand?: string;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MinorCredits): number{
    return subject1.credit + subject2.credit; 
}


export function sumMinorCredits (subject1: MajorCredits, subject2: MinorCredits): number{
    return subject1.credit + subject2.credit; 
}