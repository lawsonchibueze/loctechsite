/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { HeroData } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function HeroDataUpdateForm(props) {
  const {
    id: idProp,
    heroData,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    image: "",
    smallText: "",
    mediumText: "",
    largeText: "",
    buttonText: "",
  };
  const [image, setImage] = React.useState(initialValues.image);
  const [smallText, setSmallText] = React.useState(initialValues.smallText);
  const [mediumText, setMediumText] = React.useState(initialValues.mediumText);
  const [largeText, setLargeText] = React.useState(initialValues.largeText);
  const [buttonText, setButtonText] = React.useState(initialValues.buttonText);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = heroDataRecord
      ? { ...initialValues, ...heroDataRecord }
      : initialValues;
    setImage(cleanValues.image);
    setSmallText(cleanValues.smallText);
    setMediumText(cleanValues.mediumText);
    setLargeText(cleanValues.largeText);
    setButtonText(cleanValues.buttonText);
    setErrors({});
  };
  const [heroDataRecord, setHeroDataRecord] = React.useState(heroData);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(HeroData, idProp)
        : heroData;
      setHeroDataRecord(record);
    };
    queryData();
  }, [idProp, heroData]);
  React.useEffect(resetStateValues, [heroDataRecord]);
  const validations = {
    image: [],
    smallText: [],
    mediumText: [],
    largeText: [],
    buttonText: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          image,
          smallText,
          mediumText,
          largeText,
          buttonText,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            HeroData.copyOf(heroDataRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HeroDataUpdateForm")}
      {...rest}
    >
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image: value,
              smallText,
              mediumText,
              largeText,
              buttonText,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Small text"
        isRequired={false}
        isReadOnly={false}
        value={smallText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              smallText: value,
              mediumText,
              largeText,
              buttonText,
            };
            const result = onChange(modelFields);
            value = result?.smallText ?? value;
          }
          if (errors.smallText?.hasError) {
            runValidationTasks("smallText", value);
          }
          setSmallText(value);
        }}
        onBlur={() => runValidationTasks("smallText", smallText)}
        errorMessage={errors.smallText?.errorMessage}
        hasError={errors.smallText?.hasError}
        {...getOverrideProps(overrides, "smallText")}
      ></TextField>
      <TextField
        label="Medium text"
        isRequired={false}
        isReadOnly={false}
        value={mediumText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              smallText,
              mediumText: value,
              largeText,
              buttonText,
            };
            const result = onChange(modelFields);
            value = result?.mediumText ?? value;
          }
          if (errors.mediumText?.hasError) {
            runValidationTasks("mediumText", value);
          }
          setMediumText(value);
        }}
        onBlur={() => runValidationTasks("mediumText", mediumText)}
        errorMessage={errors.mediumText?.errorMessage}
        hasError={errors.mediumText?.hasError}
        {...getOverrideProps(overrides, "mediumText")}
      ></TextField>
      <TextField
        label="Large text"
        isRequired={false}
        isReadOnly={false}
        value={largeText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              smallText,
              mediumText,
              largeText: value,
              buttonText,
            };
            const result = onChange(modelFields);
            value = result?.largeText ?? value;
          }
          if (errors.largeText?.hasError) {
            runValidationTasks("largeText", value);
          }
          setLargeText(value);
        }}
        onBlur={() => runValidationTasks("largeText", largeText)}
        errorMessage={errors.largeText?.errorMessage}
        hasError={errors.largeText?.hasError}
        {...getOverrideProps(overrides, "largeText")}
      ></TextField>
      <TextField
        label="Button text"
        isRequired={false}
        isReadOnly={false}
        value={buttonText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              smallText,
              mediumText,
              largeText,
              buttonText: value,
            };
            const result = onChange(modelFields);
            value = result?.buttonText ?? value;
          }
          if (errors.buttonText?.hasError) {
            runValidationTasks("buttonText", value);
          }
          setButtonText(value);
        }}
        onBlur={() => runValidationTasks("buttonText", buttonText)}
        errorMessage={errors.buttonText?.errorMessage}
        hasError={errors.buttonText?.hasError}
        {...getOverrideProps(overrides, "buttonText")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || heroData)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || heroData) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}