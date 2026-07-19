import { CheckCircle2 } from "lucide-react";
import ModalButton from "@/components/ui/ModalButton";

export default function BlogContent({ content }) {
  // Compatibilité avec les anciens articles encore en texte brut
  if (typeof content === "string") {
    return (
      <div className="font-body text-text leading-relaxed whitespace-pre-line">{content}</div>
    );
  }

  return (
    <div className="space-y-6">
      {content.map((block, i) => {
        switch (block.type) {
          case "lead":
            return (
              <p key={i} className="font-body text-lg text-text leading-relaxed">
                {block.text}
              </p>
            );

          case "heading":
            return (
              <h2 key={i} className="font-heading font-bold text-xl md:text-2xl text-text pt-4">
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p key={i} className="font-body text-text leading-relaxed">
                {block.text}
              </p>
            );

          case "list":
            return block.ordered ? (
              <ol key={i} className="list-decimal list-inside space-y-2 font-body text-text leading-relaxed pl-1">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 font-body text-text leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "callout":
            return (
              <div key={i} className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5">
                {block.label && (
                  <p className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                    {block.label}
                  </p>
                )}
                <p className="font-body text-text leading-relaxed">{block.text}</p>
              </div>
            );

          case "cta":
            return (
              <div key={i} className="bg-primary rounded-2xl p-8 text-center my-8">
                <p className="font-body text-white/90 mb-5 leading-relaxed">{block.text}</p>
                <ModalButton type={block.buttonType || "rdv"} variant="primary">
                  {block.buttonLabel}
                </ModalButton>
              </div>
            );

          case "sources":
            return (
              <p key={i} className="font-body text-xs text-text-muted italic pt-4 border-t border-border mt-8">
                {block.text}
              </p>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}