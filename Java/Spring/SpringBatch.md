## Late binding and step attribute
Instead of using predefined system properties or explicitly define file name for ItemReader resource, 

We can parameterize the file name in the `JobParameters`. 

```xml
<bean id="flatFileItemReader" scope="step"
      class="org.springframework.batch.item.file.FlatFileItemReader">
    <property name="resource" value="#{jobParameters['input.file.name']}" />
</bean>
```
> In my case, created karaf shell command to execute batch job in OSGI enviornment.
> The command takes the argument which is bound to the JobParameter.
> This way, we can decide the file name on runtime.
> Keep in mind that we have to set scope as `step` for late binding.


Both `JobExcution` and `StepExcution` level `ExcutionContext` can be accessed in the same way:

```xml
<bean id="flatFileItemReader" scope="step"
      class="org.springframework.batch.item.file.FlatFileItemReader">
    <property name="resource" value="#{jobExecutionContext['input.file.name']}" />
</bean>
```

```xml
<bean id="flatFileItemReader" scope="step"
      class="org.springframework.batch.item.file.FlatFileItemReader">
    <property name="resource" value="#{stepExecutionContext['input.file.name']}" />
</bean>
```

