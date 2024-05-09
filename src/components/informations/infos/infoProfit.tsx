import { Info } from "@/lib/type/type"

export const infoProfit :Info = {
    id: "infoProfit",
    title : "Qu'est-ce que ces dépenses impliquent ?",
    values:[
        {title: "Rénovations", 
        description: "Ces dépenses font référence aux frais liés à des améliorations ou des rénovations spécifiques demandées par les locataires et que vous avez financées."
       },
       {title: "Entretien et réparation", 
       description: "Les frais liés à l'entretien et à la réparation du bien que vous avez pris en charge pour le compte des locataires."
      },
      {title: "Autres dépenses", 
      description: "Si vous payez les factures d'électricité, d'eau, de gaz, ou d'autres services publics pour le bien immobilier que vous louez, ces montants peuvent être considérés comme des frais de services payés à la place des locataires."
     }

    ]
}