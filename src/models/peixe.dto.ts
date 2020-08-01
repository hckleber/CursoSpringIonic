export interface PeixeDTO {
    id: string;
    especie: string;
    nomePopular: string;
    grupo?: string;
    litragemMinima?: string;
    porte?: string;
    alimentacao?: string;
    dificuldade?: string;
    agressivoOutrosPeixes?: string;
    agressivoMesmosPeixes?: string;
    comeCorais?: string;
    comeInvertebrados?: string;
    imageUrl?: string;
}