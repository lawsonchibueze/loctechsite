/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Course } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function CourseUpdateForm(props) {
  const {
    id,
    course,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    descriptions: undefined,
    price: undefined,
    excerpt: undefined,
    image: undefined,
    video: undefined,
    category: undefined,
    duration: undefined,
    learning_objective: [],
    level: undefined,
    curriculum: [],
    isFeatured: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [descriptions, setDescriptions] = React.useState(
    initialValues.descriptions
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [excerpt, setExcerpt] = React.useState(initialValues.excerpt);
  const [image, setImage] = React.useState(initialValues.image);
  const [video, setVideo] = React.useState(initialValues.video);
  const [category, setCategory] = React.useState(initialValues.category);
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [learning_objective, setLearning_objective] = React.useState(
    initialValues.learning_objective
  );
  const [level, setLevel] = React.useState(initialValues.level);
  const [curriculum, setCurriculum] = React.useState(initialValues.curriculum);
  const [isFeatured, setIsFeatured] = React.useState(initialValues.isFeatured);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...courseRecord };
    setName(cleanValues.name);
    setDescriptions(cleanValues.descriptions);
    setPrice(cleanValues.price);
    setExcerpt(cleanValues.excerpt);
    setImage(cleanValues.image);
    setVideo(cleanValues.video);
    setCategory(cleanValues.category);
    setDuration(cleanValues.duration);
    setLearning_objective(cleanValues.learning_objective ?? []);
    setCurrentLearning_objectiveValue(undefined);
    setLevel(cleanValues.level);
    setCurriculum(cleanValues.curriculum ?? []);
    setCurrentCurriculumValue(undefined);
    setIsFeatured(cleanValues.isFeatured);
    setErrors({});
  };
  const [courseRecord, setCourseRecord] = React.useState(course);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Course, id) : course;
      setCourseRecord(record);
    };
    queryData();
  }, [id, course]);
  React.useEffect(resetStateValues, [courseRecord]);
  const [currentLearning_objectiveValue, setCurrentLearning_objectiveValue] =
    React.useState(undefined);
  const learning_objectiveRef = React.createRef();
  const [currentCurriculumValue, setCurrentCurriculumValue] =
    React.useState(undefined);
  const curriculumRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    descriptions: [{ type: "Required" }],
    price: [{ type: "Required" }],
    excerpt: [{ type: "Required" }],
    image: [{ type: "Required" }, { type: "URL" }],
    video: [],
    category: [{ type: "Required" }],
    duration: [{ type: "Required" }],
    learning_objective: [{ type: "Required" }],
    level: [],
    curriculum: [{ type: "Required" }],
    isFeatured: [{ type: "Required" }],
  };
  const runValidationTasks = async (fieldName, value) => {
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
          name,
          descriptions,
          price,
          excerpt,
          image: image || undefined,
          video,
          category,
          duration,
          learning_objective,
          level,
          curriculum,
          isFeatured,
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
          await DataStore.save(
            Course.copyOf(courseRecord, (updated) => {
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
      {...rest}
      {...getOverrideProps(overrides, "CourseUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              descriptions,
              price,
              excerpt,
              image,
              video,
              category,
              duration,
              learning_objective,
              level,
              curriculum,
              isFeatured,
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
      <TextField
        label="Descriptions"
        isRequired={true}
        isReadOnly={false}
        defaultValue={descriptions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions: value,
              price,
              excerpt,
              image,
              video,
              category,
              duration,
              learning_objective,
              level,
              curriculum,
              isFeatured,
            };
            const result = onChange(modelFields);
            value = result?.descriptions ?? value;
          }
          if (errors.descriptions?.hasError) {
            runValidationTasks("descriptions", value);
          }
          setDescriptions(value);
        }}
        onBlur={() => runValidationTasks("descriptions", descriptions)}
        errorMessage={errors.descriptions?.errorMessage}
        hasError={errors.descriptions?.hasError}
        {...getOverrideProps(overrides, "descriptions")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={price}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price: value,
              excerpt,
              image,
              video,
              category,
              duration,
              learning_objective,
              level,
              curriculum,
              isFeatured,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Excerpt"
        isRequired={true}
        isReadOnly={false}
        defaultValue={excerpt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              excerpt: value,
              image,
              video,
              category,
              duration,
              learning_objective,
              level,
              curriculum,
              isFeatured,
            };
            const result = onChange(modelFields);
            value = result?.excerpt ?? value;
          }
          if (errors.excerpt?.hasError) {
            runValidationTasks("excerpt", value);
          }
          setExcerpt(value);
        }}
        onBlur={() => runValidationTasks("excerpt", excerpt)}
        errorMessage={errors.excerpt?.errorMessage}
        hasError={errors.excerpt?.hasError}
        {...getOverrideProps(overrides, "excerpt")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={true}
        isReadOnly={false}
        defaultValue={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              excerpt,
              image: value,
              video,
              category,
              duration,
              learning_objective,
              level,
              curriculum,
              isFeatured,
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
        label="Video"
        isRequired={false}
        isReadOnly={false}
        defaultValue={video}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              excerpt,
              image,
              video: value,
              category,
              duration,
              learning_objective,
              level,
              curriculum,
              isFeatured,
            };
            const result = onChange(modelFields);
            value = result?.video ?? value;
          }
          if (errors.video?.hasError) {
            runValidationTasks("video", value);
          }
          setVideo(value);
        }}
        onBlur={() => runValidationTasks("video", video)}
        errorMessage={errors.video?.errorMessage}
        hasError={errors.video?.hasError}
        {...getOverrideProps(overrides, "video")}
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
              name,
              descriptions,
              price,
              excerpt,
              image,
              video,
              category: value,
              duration,
              learning_objective,
              level,
              curriculum,
              isFeatured,
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
          children="Data science"
          value="DATA_SCIENCE"
          {...getOverrideProps(overrides, "categoryoption0")}
        ></option>
        <option
          children="Web development"
          value="WEB_DEVELOPMENT"
          {...getOverrideProps(overrides, "categoryoption1")}
        ></option>
        <option
          children="Creative graphics design"
          value="CREATIVE_GRAPHICS_DESIGN"
          {...getOverrideProps(overrides, "categoryoption2")}
        ></option>
        <option
          children="Office productivity"
          value="OFFICE_PRODUCTIVITY"
          {...getOverrideProps(overrides, "categoryoption3")}
        ></option>
        <option
          children="Security"
          value="SECURITY"
          {...getOverrideProps(overrides, "categoryoption4")}
        ></option>
        <option
          children="Cloud computing"
          value="CLOUD_COMPUTING"
          {...getOverrideProps(overrides, "categoryoption5")}
        ></option>
        <option
          children="Project management"
          value="PROJECT_MANAGEMENT"
          {...getOverrideProps(overrides, "categoryoption6")}
        ></option>
        <option
          children="Networking"
          value="NETWORKING"
          {...getOverrideProps(overrides, "categoryoption7")}
        ></option>
        <option
          children="Programming"
          value="PROGRAMMING"
          {...getOverrideProps(overrides, "categoryoption8")}
        ></option>
        <option
          children="Autocad"
          value="AUTOCAD"
          {...getOverrideProps(overrides, "categoryoption9")}
        ></option>
        <option
          children="Digital marketing"
          value="DIGITAL_MARKETING"
          {...getOverrideProps(overrides, "categoryoption10")}
        ></option>
        <option
          children="Finance accounting"
          value="FINANCE_ACCOUNTING"
          {...getOverrideProps(overrides, "categoryoption11")}
        ></option>
      </SelectField>
      <TextField
        label="Duration"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={duration}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              duration: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              excerpt,
              image,
              video,
              category,
              duration: value,
              learning_objective,
              level,
              curriculum,
              isFeatured,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              excerpt,
              image,
              video,
              category,
              duration,
              learning_objective: values,
              level,
              curriculum,
              isFeatured,
            };
            const result = onChange(modelFields);
            values = result?.learning_objective ?? values;
          }
          setLearning_objective(values);
          setCurrentLearning_objectiveValue(undefined);
        }}
        currentFieldValue={currentLearning_objectiveValue}
        label={"Learning objective"}
        items={learning_objective}
        hasError={errors.learning_objective?.hasError}
        setFieldValue={setCurrentLearning_objectiveValue}
        inputFieldRef={learning_objectiveRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Learning objective"
          isRequired={true}
          isReadOnly={false}
          value={currentLearning_objectiveValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.learning_objective?.hasError) {
              runValidationTasks("learning_objective", value);
            }
            setCurrentLearning_objectiveValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "learning_objective",
              currentLearning_objectiveValue
            )
          }
          errorMessage={errors.learning_objective?.errorMessage}
          hasError={errors.learning_objective?.hasError}
          ref={learning_objectiveRef}
          {...getOverrideProps(overrides, "learning_objective")}
        ></TextField>
      </ArrayField>
      <SelectField
        label="Level"
        placeholder="Please select an option"
        isDisabled={false}
        value={level}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              excerpt,
              image,
              video,
              category,
              duration,
              learning_objective,
              level: value,
              curriculum,
              isFeatured,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      >
        <option
          children="Foundation"
          value="FOUNDATION"
          {...getOverrideProps(overrides, "leveloption0")}
        ></option>
        <option
          children="Intermediate"
          value="INTERMEDIATE"
          {...getOverrideProps(overrides, "leveloption1")}
        ></option>
        <option
          children="Advance"
          value="ADVANCE"
          {...getOverrideProps(overrides, "leveloption2")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              excerpt,
              image,
              video,
              category,
              duration,
              learning_objective,
              level,
              curriculum: values,
              isFeatured,
            };
            const result = onChange(modelFields);
            values = result?.curriculum ?? values;
          }
          setCurriculum(values);
          setCurrentCurriculumValue(undefined);
        }}
        currentFieldValue={currentCurriculumValue}
        label={"Curriculum"}
        items={curriculum}
        hasError={errors.curriculum?.hasError}
        setFieldValue={setCurrentCurriculumValue}
        inputFieldRef={curriculumRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Curriculum"
          isRequired={true}
          isReadOnly={false}
          value={currentCurriculumValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.curriculum?.hasError) {
              runValidationTasks("curriculum", value);
            }
            setCurrentCurriculumValue(value);
          }}
          onBlur={() =>
            runValidationTasks("curriculum", currentCurriculumValue)
          }
          errorMessage={errors.curriculum?.errorMessage}
          hasError={errors.curriculum?.hasError}
          ref={curriculumRef}
          {...getOverrideProps(overrides, "curriculum")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Is featured"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isFeatured}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              excerpt,
              image,
              video,
              category,
              duration,
              learning_objective,
              level,
              curriculum,
              isFeatured: value,
            };
            const result = onChange(modelFields);
            value = result?.isFeatured ?? value;
          }
          if (errors.isFeatured?.hasError) {
            runValidationTasks("isFeatured", value);
          }
          setIsFeatured(value);
        }}
        onBlur={() => runValidationTasks("isFeatured", isFeatured)}
        errorMessage={errors.isFeatured?.errorMessage}
        hasError={errors.isFeatured?.hasError}
        {...getOverrideProps(overrides, "isFeatured")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
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
