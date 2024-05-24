import { Htax } from "@/lib/type/type"

export const tps :Htax = {
    id: "tps",
    description : "Qu'est-ce que ces dépenses impliquent ?",
    values:[
        {title: "Les agriculteurs", 
        description: ""
       },
       {title: "Ecoles", 
       description: "Les frais liés à l'entretien et à la réparation du bien que vous avez pris en charge pour le compte des locataires."
      },
      {title: "Autres dépenses", 
      description: "Si vous payez les factures d'électricité, d'eau, de gaz, ou d'autres services publics pour le bien immobilier que vous louez, ces montants peuvent être considérés comme des frais de services payés à la place des locataires."
     }

    ]
}