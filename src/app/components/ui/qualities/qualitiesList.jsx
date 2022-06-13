import React from "react";
import Qualities from "../qualities";
import { useQuality } from "../../../hooks/useQualities";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQualitiesById } = useQuality();

    console.log("isLoading", isLoading);

    if (!isLoading) {
        return (
            <>
                {qualities.map((q) => (
                    <Qualities
                        key={getQualitiesById(q)._id}
                        color={getQualitiesById(q).color}
                        name={getQualitiesById(q).name}
                    />
                ))}
            </>
        );
    } else {
        return "Loading ... :(";
    }
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
