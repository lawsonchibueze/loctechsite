/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Testimonial } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TestimonialCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    category: undefined,
    Featured: false,
    Feedback: "",
    name: "",
  };
  const [image, setImage] = React.useState(initialValues.image);
  const [category, setCategory] = React.useState(initialValues.category);
  const [Featured, setFeatured] = React.useState(initialValues.Featured);
  const [Feedback, setFeedback] = React.useState(initialValues.Feedback);
  const [name, setName] = React.useState(initialValues.name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setImage(initialValues.image);
    setCategory(initialValues.category);
    setFeatured(initialValues.Featured);
    setFeedback(initialValues.Feedback);
    setName(initialValues.name);
    setErrors({});
  };
  const validations = {
    image: [{ type: "URL" }],
    category: [],
    Featured: [],
    Feedback: [],
    name: [],
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
          category,
          Featured,
          Feedback,
          name,
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
          await DataStore.save(new Testimonial(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TestimonialCreateForm")}
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
              category,
              Featured,
              Feedback,
              name,
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
      <SelectField
        label="Category"
        placeholder="Please select an option"
        isDisabled={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              category: value,
              Featured,
              Feedback,
              name,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      >
        <option
          children="Study environment"
          value="STUDY_ENVIRONMENT"
          {...getOverrideProps(overrides, "categoryoption0")}
        ></option>
        <option
          children="Training standard"
          value="TRAINING_STANDARD"
          {...getOverrideProps(overrides, "categoryoption1")}
        ></option>
        <option
          children="Instructor"
          value="INSTRUCTOR"
          {...getOverrideProps(overrides, "categoryoption2")}
        ></option>
        <option
          children="Job placement"
          value="JOB_PLACEMENT"
          {...getOverrideProps(overrides, "categoryoption3")}
        ></option>
      </SelectField>
      <SwitchField
        label="Featured"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Featured}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              image,
              category,
              Featured: value,
              Feedback,
              name,
            };
            const result = onChange(modelFields);
            value = result?.Featured ?? value;
          }
          if (errors.Featured?.hasError) {
            runValidationTasks("Featured", value);
          }
          setFeatured(value);
        }}
        onBlur={() => runValidationTasks("Featured", Featured)}
        errorMessage={errors.Featured?.errorMessage}
        hasError={errors.Featured?.hasError}
        {...getOverrideProps(overrides, "Featured")}
      ></SwitchField>
      <TextField
        label="Feedback"
        isRequired={false}
        isReadOnly={false}
        value={Feedback}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              category,
              Featured,
              Feedback: value,
              name,
            };
            const result = onChange(modelFields);
            value = result?.Feedback ?? value;
          }
          if (errors.Feedback?.hasError) {
            runValidationTasks("Feedback", value);
          }
          setFeedback(value);
        }}
        onBlur={() => runValidationTasks("Feedback", Feedback)}
        errorMessage={errors.Feedback?.errorMessage}
        hasError={errors.Feedback?.hasError}
        {...getOverrideProps(overrides, "Feedback")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              category,
              Featured,
              Feedback,
              name: value,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
