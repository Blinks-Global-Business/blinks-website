"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import TeamGrid from "@/components/sections/TeamGrid";
import Modal from "@/components/ui/Modal";
import { TEAM_MEMBERS } from "@/data/team";

export default function TeamSection() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("about.team");

  const featuredMembers = TEAM_MEMBERS.filter((m) => m.featured);

  return (
    <>
      <TeamGrid members={featuredMembers} />

      <div className="text-center mt-10">
        <button
          onClick={() => setIsOpen(true)}
          className="font-body text-sm border border-primary text-primary rounded-md px-6 py-3 hover:bg-primary hover:text-white transition-colors"
        >
          {t("viewFullTeam")}
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="max-w-4xl">
        <h2 className="font-heading font-bold text-2xl text-text mb-8 text-center">
          {t("fullTeamTitle")}
        </h2>
        <TeamGrid members={TEAM_MEMBERS} />
      </Modal>
    </>
  );
}