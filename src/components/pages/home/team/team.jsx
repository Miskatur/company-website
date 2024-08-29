"use client";
import React from "react";
import { motion } from "framer-motion";
import SingleTeam from "./singleTeam";
import { useAboutDataQuery } from "@/features/aboutpage";

const Team = ({ bgColor }) => {
  const { data, isLoading, isFetching } = useAboutDataQuery();
  const TeamMember = data?.data?.team_member_list || [];
  const PageData = data?.data?.page_data;

  const { about_fourth_section_title = "Our team members" } = PageData || {};

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div
      className={`${
        bgColor ? bgColor : ""
      } team-style-two-area default-padding-top pb-70 pb-xs-0`}
    >
      {TeamMember && (
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-6 col-lg-12">
              <div className="site-heading">
                <h5 className="sub-title">Team members</h5>
                <h2 className="title">{about_fourth_section_title}</h2>
              </div>
            </div>
            {TeamMember?.length > 0 &&
              TeamMember?.slice(0, 5)?.map((team) => (
                <motion.div
                  key={team?.id}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      },
                    },
                  }}
                  transition={{ delay: 0.2 }}
                  className="col-xl-3 col-lg-4 col-md-6 mb-50"
                >
                  <SingleTeam team={team} imageurl={baseUrl} />
                </motion.div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
